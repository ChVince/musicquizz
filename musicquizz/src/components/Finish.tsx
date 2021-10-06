import ResultsTable from "./ResultsTable/ResultsTable";
import _results from "./ResultsTable/ResultsData.json";
import {useState} from "react";

type FinishProps = {};

function Finish(props: FinishProps) {

    const PAGE_SIZE = 10;

    let [resultsData, setResultsData] = useState(_results.slice(0, PAGE_SIZE));

    const loadResultsData = (page:number) => {
        //needed firebase request
        // loadResults(numRows, page, pageSize) return (resultsRow, numRows)
        // NOW MOCKED
        setResultsData(_results.slice(page * PAGE_SIZE,page * PAGE_SIZE + PAGE_SIZE))
    };

    return <div>
        <h3>Your results!</h3>
        <ResultsTable pageSize={PAGE_SIZE} resultsData={resultsData} onPageChanged={loadResultsData} />
    </div>
}

export default Finish