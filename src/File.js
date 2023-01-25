import React from 'react'

const File = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row abc">
            <div className="col-lg-2 col-md-6 col-sm-6 col-12 abox">
        <h4>^^^^^^^</h4>
                
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 bbox">
                <input type="text" className="input1" placeholder="Find by Name or phone Number" />

            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 cbox">
                <p className="sun">Gender</p>
                <select id="cars">
  <option value="volvo">Female</option>
  <option value="saab">Male</option>
  <option value="vw">Other</option>
  
</select>
<p1>Member Status</p1>
<select id="car">
  <option value="vol">Active Member</option>
  </select>
  
</div>
<h3 className="sun2">________________________________________________________________________________________________________________________</h3>
        </div>
        
    </div>
    

    </>
  )
}

export default File