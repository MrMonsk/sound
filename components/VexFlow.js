import React, { Component } from 'react';
import Vex from 'vexflow';
import ReactDOM from 'react-dom';

const {
    Accidental,
    Formatter,
    Stave,
    Renderer,
    VF
} = Vex.Flow

class VexFlow extends Component {
    constructor() {
        super();
        this.drawNotes = this.drawNotes.bind(this);
    }

    componentDidMount() {
        this.renderVexFlow();
    }

    renderVexFlow() {
        console.log('hey')

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("vexflow")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 500);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
    }

    drawNotes() {
        var notes = [
        // A quarter-note C.
        new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),

        // A quarter-note D.
        new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),

        // A quarter-note rest. Note that the key (b/4) specifies the vertical
        // position of the rest.
        new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),

        // A C-Major chord.
        new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
        ];

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

        // Render voice
        voice.draw(context, stave);
    }

    render() {
        return (
            <div>
                <div id='vexflow' />
                <h1><button onClick={this.drawNotes}>draw!</button></h1>
            </div>
        )
    }
}

export default VexFlow;