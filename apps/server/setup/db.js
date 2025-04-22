const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./data/renewableEnergy.db";

function connectToDatabase() {
    if (fs.existsSync(filepath)) {
      return new sqlite3.Database(filepath);
    } else {
      const db = new sqlite3.Database(filepath, (error) => {
        if (error) {
          return console.error(error.message);
        }
        createTable(db);
        console.log("Connected to the database successfully");
      });
      return db;
    }
  }

  function createTable(db) {
    db.exec(`
    CREATE TABLE renewableEnergy
    (
      Type_of_Renewable_Energy          INT,
      Installed_Capacity_MW             REAL,
      Energy_Production_MWh             REAL,
      Energy_Consumption_MWh            REAL,
      Energy_Storage_Capacity_MWh       REAL,
      Storage_Efficiency_Percentage     REAL,
      Grid_Integration_Level            INT,
      Initial_Investment_USD            REAL,
      Funding_Sources                   INT,
      Financial_Incentives_USD          REAL,
      GHG_Emission_Reduction_tCO2e      REAL,
      Air_Pollution_Reduction_Index     REAL,
      Jobs_Created                      INT
    )
  `);
  }
  
module.exports = connectToDatabase();