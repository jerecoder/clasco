// Getting the kids' names
class whyGo extends React.Component {
    render() {
        <div>
        
      
      <select className='tableDropDown' onChange={this.onTableChange}>
        { this.renderTableList() }
      </select>
      <br/>
      <br/>
      <label>Show {this.state.selectedTable}Classmates</label>
      <br/>
      <select className='columnSelect' onChange={this.onColumnChange} multiple>
        { this.renderColumnList() }
      </select>
      <br/>
      <br/>
      { this.state.kids.length > 0 ? 
          <button onClick={this.getData}>Get [{ this.state.selectedTable }] Data</button> : 
          null 
      }
      <br/>
      <br/>
      { this.state.tableData.length > 0 ? 
          this.renderTable() : 
          null 
      }
    </div>

        
    }
}
// parent function for the kids names
class ClickGo extends React.Component {
    render() {
        return (
        <div> 
        <h2>Your Classmates</h2> 
        <ClickGo kids='children' />
        </div>
        );

    }


}
// uploading assignments for the teacher 
class assignment extends React.Component {
    state = {
 
        // Initially, no file is selected
        selectedFile: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
        if (this.state.selectedFile) {
           
          return (
            <div>
              <h2>File Details:</h2>
               
  <p>File Name: {this.state.selectedFile.name}</p>
   
               
  <p>File Type: {this.state.selectedFile.type}</p>
   
               
  <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h4>Choose before Pressing the Upload button</h4>
            </div>
          );
        }
      };
      
      render() {
      
        return (
          <div>
              
              <h3>
                Assignment Upload!
              </h3>
              <div>
                  <input type="file" onChange={this.onFileChange} />
                  <button onClick={this.onFileUpload}>
                    Upload!
                  </button>
              </div>
            {this.fileData()}
          </div>
        );
      }
    }
export default assignment;
