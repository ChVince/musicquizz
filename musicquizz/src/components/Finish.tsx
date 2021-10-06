import ResultsTable from "./ResultsTable/ResultsTable";
import _results from "./ResultsTable/ResultsData.json";


type FinishProps = {};

function Finish(props: FinishProps) {

    const resultsData = _results;

    return <div>
        <h3>Your results!</h3>
        <ResultsTable resultsData={resultsData} />
    </div>
}

export default Finish