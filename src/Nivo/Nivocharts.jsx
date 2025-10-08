import React from 'react'
import NivoArea from './AreaChart'
import NivoBar from './BarChart'
import NivoLine from './Linechart'
import Nivopie from './PieChart'
const Nivocharts = () => {
  return (
  <>
   <div className="chart-grid">
      <div className="chart-item"><NivoArea /></div>
      <div className="chart-item"><NivoBar /></div>
      <div className="chart-item"><NivoLine /></div>
      <div className="chart-item">< Nivopie/></div>
    </div>
  
  </>
  )
}

export default Nivocharts
