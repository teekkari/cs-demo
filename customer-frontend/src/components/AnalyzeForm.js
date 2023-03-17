import React from 'react';

class AnalyzeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: '',
            mapName: '',
        }
    }

    handleChange = (event) => {
        const property = event.target.getAttribute('name');
        const value = event.target.value;
        this.setState({ [property]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log('Something went wrong');
        })
    }

    render() {
        return <div className=''>
            <h2>Input player name and map</h2>
            <div className='my-2'>
                <label className='inline-block w-36' htmlFor='player'>Player name</label>
                <input onChange={this.handleChange} className='border-[1px] rounded' id='player' name='player' />
            </div>
            <div className='my-2'>
                <label className='inline-block w-36' htmlFor='mapName'>Map name</label>
                <input onChange={this.handleChange} className='border-[1px] rounded' id='mapName' name='mapName' />
            </div>

            <input onClick={this.handleSubmit} className='bg-green-300 text-white px-5 py-2 mt-5 cursor-pointer transition-all relative top-0 hover:-top-1' type='submit' value='Analyze' />
        </div>;
    }
}

export default AnalyzeForm;