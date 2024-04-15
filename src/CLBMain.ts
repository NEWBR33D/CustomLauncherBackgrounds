/*
 * CustomLauncherBackgrounds v1.0.0
 * MIT License
 * Copyright (c) 2024 PreyToLive
 */

/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */

import { DependencyContainer } from "tsyringe";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { LoggerTypes } from "../enums/CLBEnumLogger";
import * as path from "path";
import * as fs from "fs";
import pkg from "../package.json";
import config from "../config/config.json";

class CLBMain implements IPostAkiLoadMod {
    private preAkiModLoader: PreAkiModLoader;
    private logger: ILogger;
    private imageRouter: ImageRouter;

    public postAkiLoad(container: DependencyContainer): void {
        this.preAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.imageRouter = container.resolve<ImageRouter>("ImageRouter");

        const modPath = path.basename(path.dirname(__dirname.split('/').pop()));
        const resFolderPath = `${this.preAkiModLoader.getModPath(modPath)}res`;

        const launcherFolderName = config.launcherFolderToUse;
        const launcherFolderPath = path.join(resFolderPath, "launchers", launcherFolderName);

        if (config.modEnabled && launcherFolderName !== undefined) {
            fs.readdir(launcherFolderPath, (err, files) => {
                if (err) {
                    this.logger.error(`Mod: ${pkg.name}: Error reading directory: ${err}`);
                    return;
                }

                const randomIndex = Math.floor(Math.random() * files.length);
                const randomFile = files[randomIndex];

                const route = "/files/launcher/bg";
                const imagePath = path.join(launcherFolderPath, randomFile);

                this.imageRouter.addRoute(route, imagePath);

                if (config.consoleLogs) {
                    this.logger.log(`Mod: ${pkg.name}: Console Logs`, LoggerTypes.INFO);
                    this.logger.log(`${route} => ${imagePath}`, LoggerTypes.INFO);
                }
            });
        } else {
            this.logger.log(`Mod: ${pkg.name}: Unable to find contents for "launcherFolderToUse": ${launcherFolderPath}`, LoggerTypes.ERROR);
        }
    }
}

module.exports = { mod: new CLBMain() };