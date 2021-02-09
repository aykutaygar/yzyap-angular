import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
//import {NgxBlocklyConfig, NgxBlocklyGeneratorConfig } from 'ngx-blockly';
import {BlocklyComponent} from './component/blockly/blockly.component';

// declare var Blockly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baseangularadminlte';

  // workspace: any;

  // blockly_toolbox = '<xml id="toolbox" style="display: none">' +
  // '<block type="controls_if"></block>' +
  // '<block type="controls_repeat_ext"></block>' +
  // '<block type="logic_compare"></block>' +
  // '<block type="math_number"></block>' +
  // '<block type="math_arithmetic"></block>' +
  // '<block type="text"></block>' +
  // '<block type="text_print"></block>' +
  // '</xml>';  
  

  // public config: NgxBlocklyConfig = {
  //   toolbox: '<xml id="toolbox" style="display: none">' +
  //               '<block type="controls_if"></block>' +
  //               '<block type="controls_repeat_ext"></block>' +
  //               '<block type="logic_compare"></block>' +
  //               '<block type="math_number"></block>' +
  //               '<block type="math_arithmetic"></block>' +
  //               '<block type="text"></block>' +
  //               '<block type="text_print"></block>' +
  //            '</xml>',
  //   scrollbars: true,
  //   trashcan: true
  // };

  // public generatorConfig: NgxBlocklyGeneratorConfig = {
  //   dart: true,
  //   javascript: true,
  //   lua: true,
  //   php: true,
  //   python: true,
  //   xml: true
  // }; 

  // onCode(code: string) {
  //   console.log(code);
  // }

  
  
  // addBlockly(){
  //   //sayfaya kartı ekle

  //   this.workspace = Blockly.inject('blocklyDiv1', {
  //     toolbox: this.blockly_toolbox,
  //     scrollbars: false
  //   });
  // }
  // addBlockly2(){
  //   this.workspace = Blockly.inject('blocklyDiv2', {
  //     toolbox: this.blockly_toolbox,
  //     scrollbars: false
  //   });
  // }

  @ViewChild('container1', { read: ViewContainerRef }) container1!: ViewContainerRef;
  @ViewChild('container2', { read: ViewContainerRef }) container2!: ViewContainerRef;

  private _counter = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory
    
    if (this._counter %2 == 0){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlocklyComponent);

      // add the component to the view
      const componentRef = this.container1.createComponent(componentFactory);

      // pass some data to the component
      componentRef.instance.index = this._counter++;

    }

    else {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlocklyComponent);

      // add the component to the view
      const componentRef = this.container2.createComponent(componentFactory);

      // pass some data to the component
      componentRef.instance.index = this._counter++;

      

    }
  }
}



