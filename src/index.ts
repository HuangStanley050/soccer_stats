import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const reader = new MatchReader("football.csv");
reader.read();

const newSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

newSummary.buildAndPrintReport(reader.data);
