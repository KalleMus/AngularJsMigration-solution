import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Spinner } from "spin.js";

@Component({
  selector: "cc-spinner",
  template:/*html*/ `
  <div class="spinner" [hidden]="!isLoading">
    <span #spinnerElement></span>
    <p>{{ message }}</p>
  </div>
  `
})
export class SpinnerComponent implements AfterViewInit {

  @Input()
  public isLoading: boolean;
  
  @Input()
  public message: string;
  
  @ViewChild("spinnerElement")
  private spinnerElement: ElementRef;

  ngAfterViewInit(): void {
    const spinner = new Spinner({radius:8, width:5, length: 3, lines:9});
    spinner.spin(this.spinnerElement.nativeElement);
  }

}
