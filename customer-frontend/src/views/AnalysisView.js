import Button from "../components/common/Button";


function AnalysisView(props) {

    if (props.isLoading) {
        return <div>
            Loading...
        </div>
    }

    return <div className=''>
        <h2>Insights</h2>
        <p>Test test</p>
        <Button>See performance positions</Button>
    </div>
};

export default AnalysisView;