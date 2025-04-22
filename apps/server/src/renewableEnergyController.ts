import { NextFunction, Request, Response } from "express";
// @ts-ignore
import sqlite3 from "aa-sqlite";

export const getItemsByType = async (req: Request, res: Response, next: NextFunction) => {
    await sqlite3.open('./data/renewableEnergy.db')
    const results = await sqlite3.all("Select * from renewableEnergy where Type_of_Renewable_Energy = 4;");
    console.log("Hello")
    await sqlite3.close();
    res.send(results)
}