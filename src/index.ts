import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

const reader = new MatchReader("football.csv");
reader.read();

const newSummary = Summary.winsAnalysisWithHtmlReport("Man United");

newSummary.buildAndPrintReport(reader.data);
