export interface IDiceResults {
  Expression: string;
  Dice: Array<Number>;
  Total: Number;
  Time :Date;
};

export interface IDiceResultsLogs {
  Logs:Array<IDiceResults>
}
