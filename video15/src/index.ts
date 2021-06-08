class BaseAPIService{
  static BASE_URL:string = "http://apiurl.com";
  static isServerOn(serverUrl:string):boolean{
    //logic
    return true;
  }

  static turnOffServer(serverURL:string){
    if(this.isServerOn(serverURL)){
      //turn off server
    }
  }

  get(url:string){
    console.log(BaseAPIService.BASE_URL);
  }
}

class StudentAPIService extends BaseAPIService{
  private url:string = "/students";

  static isServerOn(serverURL:string):boolean{
    return super.isServerOn(serverURL);
  }

  get(){
    const getURL = `${StudentAPIService.BASE_URL}${this.url}`
    //fetch
    console.log(getURL);
  }
}

const apiService = new StudentAPIService();

console.log(StudentAPIService.isServerOn(""))
apiService.get();

