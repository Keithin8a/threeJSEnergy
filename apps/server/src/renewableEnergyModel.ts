export enum RenewableEnergyType {
    SOLAR = 1,
    WIND,
    HYDRO,
    GEO,
    BIOMASS,
    TIDAL,
    WAVE
}

export enum GridIntegrationLevel {
    FULL = 1,
    PARTIAL,
    MINIMAL,
    ISOLATED
}

export enum FundingSources {
    GOVERNMENT = 1,
    PRIVATE,
    PUBLIC_PRIVATE
}

export interface Item {
    Type_of_Renewable_Energy:         RenewableEnergyType,
    Installed_Capacity_MW:            number,
    Energy_Production_MWh:            number,
    Energy_Consumption_MWh:           number,
    Energy_Storage_Capacity_MWh:      number,
    Storage_Efficiency_Percentage:    number,
    Grid_Integration_Level:           GridIntegrationLevel,
    Initial_Investment_USD:           number,
    Funding_Sources:                  FundingSources,
    Financial_Incentives_USD:         number,
    GHG_Emission_Reduction_tCO2e:     number,
    Air_Pollution_Reduction_Index:    number,
    Jobs_Created:                     number
}