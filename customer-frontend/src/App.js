import React, { useState } from 'react';

import './App.css';
import Layout from './layout/BaseLayout';

import AnimateHeight from 'react-animate-height';

import AnalyzeForm from './components/content/AnalyzeForm';
import AnalysisView from './views/AnalysisView';
import Button from './components/common/Button';

function App() {

  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <Layout>
      <div id='hero' className='grid'>
          <div>
            <h1 className='text-5xl font-bold text-primary'>
              Gain <span className='text-accent'>advantage</span> over your enemies!
            </h1>

            <p className='text-3xl mt-2'>Live insights into your Faceit game. Learn their positions, weaknesses and habits.</p>

            <p className='font-bold'>Get started</p>
            <input className='p-2 w-full my-2 rounded-lg' />
            <div className='grid gap-2 grid-cols-2 mt-2'>
              <Button primary onClick={() => setShowAnalysis(true)}>Search with match URL</Button>
              <Button primary>Search with player name</Button>
            </div>

            <div className='my-3'>
              <AnimateHeight duration={500} height={showAnalysis ? 'auto' : 0}>
                <AnalysisView />
              </AnimateHeight>
            </div>

            <div>
                <h2 className='text-3xl text-primary'>Find performance positions of CT</h2>
                <p>Lorem ipsum... sdfsd</p>
            </div>

            <div>
                <h2 className='text-3xl text-primary'>Find performance positions of CT</h2>
                <p>Lorem ipsum... sdfsd</p>
            </div>

            <div>
                <h2 className='text-3xl text-primary'>Find performance positions of CT</h2>
                <p>Lorem ipsum... sdfsd</p>
            </div>


          </div>
      </div>
    </Layout>
  );
}

export default App;
