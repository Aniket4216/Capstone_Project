import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

const Book = ()=>{
    return(
        <>
        <Navbar/>
        <div className='container' >
        <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col" className="text-center">Sr No.</th>
      <th scope="col" className="text-start">Book Name</th>
      <th scope="col" className="text-center">View</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td className="text-start">Cracking Coding Interviews</td>
      <a href="https://drive.google.com/file/d/1lD2hsg6A12QIrJUjN6R05hfsVqjXbJIt/view?usp=drivesdk" target="_blank"><td>View Book</td></a>
      
    </tr>
    <tr>
      <th scope="row" className="text-center">2</th>
      <td className="text-start">Big data Analysis</td>
      <a href="https://drive.google.com/file/d/1kmJQYKmRmu-vLnD5KfygdYNY1yYALYdB/view?usp=sharing" target="_blank"><td>View Book</td></a>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td className="text-start">Data Structures</td>
      <a href="https://drive.google.com/file/d/1kw_DT7mEWPINYGUOzcPYGh1Q-PXUspNl/view?usp=sharing" target="_blank"><td>View Book</td></a>
      
    </tr>

    <tr>
      <th scope="row">4</th>
      <td className="text-start">Environment Management</td>
      <a href="https://drive.google.com/file/d/1klv47g6gblwyFqtt4i8qS_fjidXgcJKn/view?usp=sharing" target="_blank"><td>View Book</td></a>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td className="text-start">Interaction Designer</td>
      <a href="https://drive.google.com/file/d/1l1sQWXpD_KG3kqmD2VPqtvE5FQwr9RUI/view?usp=sharing" target="_blank"><td>View Book</td></a>
      
    </tr>
    <tr>
      <th scope="row">6</th>
      <td className="text-start">Internet Things</td>
      <a href="https://drive.google.com/file/d/1kotFmSN8jknaAMDxEdJ4DUZnd3168CKT/view?usp=sharing" target="_blank"><td>View Book</td></a>
      
    </tr>
    <tr>
      <th scope="row">7</th>
      <td className="text-start">Machine Learning</td>
      <a href="https://drive.google.com/file/d/18w72QYRkvuPUWJycoOE68zWBVmGLOktr/view?usp=sharing" target="_blank"><td>View Book</td></a>
      
    </tr>


  </tbody>
</table>
        </div>
        
      
        </>
    )
}
export default Book;