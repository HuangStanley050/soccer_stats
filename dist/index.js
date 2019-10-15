"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var newSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
newSummary.buildAndPrintReport(reader.data);
