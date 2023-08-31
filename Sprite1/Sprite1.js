/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 372.38237000000004,
        y: 357.73525
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage4
      )
    ];
  }

  *whenIReceiveMessage1() {
    while (true) {
      if (this.compare(this.x, 16) > 0) {
        this.move(-3);
      }
      if (this.compare(-531, this.x) > 0) {
        this.move(3);
      }
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.goto(0, -83);
    this.moveBehind();
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(-3);
      }
      if (this.keyPressed("left arrow")) {
        this.move(3);
      }
      yield;
    }
  }

  *whenIReceiveMessage3() {
    while (true) {
      if (this.compare(this.x, 16) > 0) {
        this.broadcast("STOP!!!!!!!!");
        this.move(-3);
      }
      if (this.compare(-531, this.x) > 0) {
        this.broadcast("STOP!!!!!!!!");
        this.move(3);
      }
      yield;
    }
  }

  *whenIReceiveMessage4() {
    while (true) {
      this.stage.vars.mapx = this.x;
      yield;
    }
  }
}
