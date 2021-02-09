import { Component, OnInit, Input } from '@angular/core';

declare var Blockly: any;

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})
export class BlocklyComponent implements OnInit {
  @Input() index!: number;
  
  workspace: any;

  blockly_toolbox = '<xml id="toolbox" style="display: none">' +
  '<block type="controls_if"></block>' +
  '<block type="controls_repeat_ext"></block>' +
  '<block type="logic_compare"></block>' +
  '<block type="math_number"></block>' +
  '<block type="math_arithmetic"></block>' +
  '<block type="text"></block>' +
  '<block type="text_print"></block>' +
  '</xml>';  

  constructor() { }

  ngOnInit(): void {
    console.log("on init");
    this.workspace = Blockly.inject('blocklyDiv1', {
      toolbox: this.blockly_toolbox,
      theme: Blockly.Themes.Dark,
      zoom:
      {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true
      },
      grid:
      {
          spacing: 15,
          length: 1,
          colour: '#ccc',
          snap: true
      },
      trashcan: true
    });

  }

  cardBlankText = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

}
