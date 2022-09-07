

export class Job {
  /**
   * The data needed to make a car
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string}} data 
   */
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }



  get JobCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.company}" alt="${this.jobTitle}-${this.hours}" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.rate} | ${this.description}
          </h5>
          <p>
            <strong>$ ${this.rate}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }






}