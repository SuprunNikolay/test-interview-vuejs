import TorqueProfileData from '../services/TorqueProfileData'
import {Bar} from 'vue-chartjs'

export default {
  name: 'Open',
  extends: Bar,
  mounted(){
    TorqueProfileData.closeTorqueProfileData(21).then((data)=>{
      const averageTorque = data.map((i) => i['AverageTorque']);
      const lastTorque = data.map((i) => i['LastTorque']);
      this.renderChart({
        labels:
          new Array(101).fill(0).map((a,i) => i),
        datasets: [
          {
            label: 'Average open torque',
            backgroundColor: '#1175b6',
            data: averageTorque
          },
          {
            label: 'Last open torque',
            backgroundColor: '#adc6e9',
            data: lastTorque
          }
        ]
      }, {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Valve position'
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Required torque (%)'
            },

          }]
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          },
        },
      })
    }).bind(this)
  }
}