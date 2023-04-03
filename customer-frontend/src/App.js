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

            <p className='text-2xl mt-2'>Live insights into your Faceit game. Learn their positions, weaknesses and habits.</p>

            <p className='font-bold mt-4'>Get started</p>
            <AnalyzeForm />

            <div className='my-5'>
              <AnimateHeight duration={500} height={showAnalysis ? 'auto' : 0}>
                <AnalysisView />
              </AnimateHeight>
            </div>

            <div className='mb-5'>
                <h2 className='text-3xl text-primary font-semibold mb-2'>Find common positions for players</h2>
                <p>Our interactive heatmap gives you a great overview of where the enemies play often.</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-3xl text-primary font-semibold mb-2'>See performance graph for enemies</h2>
                <p>Find out where the enemy fumbles the bag and where they should be respected.</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-3xl text-primary font-semibold mb-2'>Get overview of all enemy players</h2>
                <p>We analyze their playstyle. Do they move around a lot, or stay in single positions. Are they the anchor or a rotator.</p>
            </div>


          </div>
      </div>
    </Layout>
  );
}

export default App;
