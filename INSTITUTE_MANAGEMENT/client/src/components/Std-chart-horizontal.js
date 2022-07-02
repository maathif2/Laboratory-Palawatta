import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import axios from "axios";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Horizontalchart =() => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [data, setData] = useState({
        const options = {
            indexAxis:'x',
            elements:{
                bar:{
                    borderWidth:2,
                },
            },
            responsive:true,
            plugins:{
                legend:{
                    position:'left',
                },
                title:{
                    display:true,
                    text:'Student Attendence Bar Chart',
                },
            },
        };
        const labels=['Sinhala','Science','Maths','ICT','English']

        const [data,setData] = useState({
            labels,
            datasets: [
                {
                  label: 'Attended',
                  data:[],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(177, 1, 145, 0.8)',
                },
                {
                  label: 'Not Attended',
                  data:[],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
              ],

        });
        // const [data,setData]=useState([])

        useEffect(()=>{
            const fetchData=async()=>{
                const url = 'http://localhost:5000/api/attendences/'
                const labelSet = []
                const dataSet1 = [];
                const dataSet2 = [];
          
                fetch(url, {
                    method:'GET'
                }).then(data => {
                    console.log("Api data",data)
                    const res = data.json();
                    return res
                }).then((res)=>{
                    console.log("ressss",res)
                    // for (const val of res) {
                    //     dataSet1.push(val.attendence['Yes'])
                    //     dataSet2.push(val.attendence['No'])
                    //     labelSet.push(val.subjects)
                    // }
                    for (const val of labels) {
                        const data=('http://localhost:5000/api/attendences/countDocuments/Yes/'+String(val)) ;
                        axios.get(data).then(function(response){
                            dataSet1.push(response.data);
                            setShow(false);
                        })
                    }
                    for (const val of labels) {
                        const data=('http://localhost:5000/api/attendences/countDocuments/No/'+String(val)) ;
                        axios.get(data).then(function(response){
                            dataSet2.push(response.data);
                            setShow(false);
                        })
                    }
                    
                    
                    console.log("data set 1 is :",dataSet1);
                    console.log("data set 2 is :",dataSet2);
                    
                    
                    setData({
                        labels,
                        datasets: [
                            {
                              label: 'Attended',
                              data:dataSet1,
                              borderColor: 'rgb(255, 99, 132)',
                              backgroundColor: 'rgba(177, 1, 145, 0.8)',
                            },
                            {
                                label: 'Not Attended',
                                data:dataSet2,
                                borderColor: 'rgb(53, 162, 235)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                              },
                            
                          ],
            
                    })
                }).catch(e =>{
                    console.log("error",e)
                })
            }
            fetchData();
        },[])
        

   
    return(
        // <div style={{width:'80%', height:'50%'}}>
        //     {
        //         console.log("dataaaaaaaa", data)
        //     }
        //     <Bar data={data} options={options}/>
        //  </div>
        <Bar data={data} options={options}/>
        )
}
export default Horizontalchart;