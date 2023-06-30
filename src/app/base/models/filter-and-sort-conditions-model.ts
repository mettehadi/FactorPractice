
export class FilterAndSortConditions {
    firstSearch?: boolean;
    // DEPRECATE
    // andConditions?: AndConditionViewModel[];
    sortConditions?: SortCondition[];
    filterConditionModel?: FilterConditionModel;
    pageSize?: number;
    pageNumber?: number;
    disablePaging?: boolean;
    constructor(filterConditionModel:FilterConditionModel , sortConditions:SortCondition [], pageSize:number, pageNumber:number, disablePaging:boolean) {

        this.filterConditionModel = filterConditionModel;

        this.sortConditions = sortConditions;

        this.pageSize = pageSize || 10;

        this.pageNumber = pageNumber || 1;

        if (disablePaging === undefined) {
            this.disablePaging = true;
        } else {
            this.disablePaging = disablePaging;
        }
    }
}

// DEPRECATE
// export interface AndConditionViewModel {
//     propertyName: string;
//     orCondition: OrConditionViewModel[];
// }

// DEPRECATE
// export interface OrConditionViewModel {
//     operation: string;
//     values: any[];
//     value: any;
// }

export interface SortCondition {
    propertyName: string;
    isDescending: boolean;
}

export enum FilterOperationEnum {
    And = 'AND',
    Or = 'OR',
    Any = 'Any',
    All = 'All'
}

export interface FilterConditionModel {
    Operator?: FilterOperationEnum;
    conditions?: FilterConditionModel[];
    propertyName?: string;
    expressionValues?: DynamicExpresion[];

    filterType?: FilterType;
    // filterParams?: FilterParams;
    headerName?: string;
}
export enum FilterType {
    date = 'date',
    string = 'string',
    number = 'number',
    select = 'select',
    boolean = 'boolean',
    weekDay = 'weekDay',
}
export interface DynamicExpresion {
    expressionOperator?: ExpressionOperationEnum;
    values?: any[];
    Value?: any;
    valueFunction?: string;
}

export enum ExpressionOperationEnum {
    InListOfValues = 'InListOfValues',
    NotInListOfValues = 'NotInListOfValues',
    InListOfValuesIgnoreCaseNotEf = 'InListOfValuesIgnoreCaseNotEf',
    NotInListOfValuesIgnoreCaseNotEf = 'NotInListOfValuesIgnoreCaseNotEf',
    Equal = 'Equal',
    NotEqual = 'NotEqual',
    GreaterThan = 'GreaterThan',
    GreaterThanOrEqual = 'GreaterThanOrEqual',
    LessThan = 'LessThan',
    LessThanOrEqual = 'LessThanOrEqual',
    Like = 'Like',
    NotLike = 'NotLike',
    Contains = 'Contains',
    NotContains = 'NotContains',
    InRange = 'InRange',
    InRangeWithoutEdge = 'InRangeWithoutEdge',
    IsNull = 'IsNull',
    IsNotNull = 'IsNotNull',
    Last90Days = 'Last90Days',
    Last60Days = 'Last60Days',
    Last30Days = 'Last30Days',
    Last3Days = 'Last3Days',
    Today = 'Today',
    Next3Days = 'Next3Days',
    Next30Days = 'Next30Days',
    Next60Days = 'Next60Days',
    Next90Days = 'Next90Days'
}
