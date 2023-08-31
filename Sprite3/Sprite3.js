/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 23.666656494140625,
        y: 60.33332824707031
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 23.666656494140625,
        y: 60.3333282470703
      }),
      new Costume("costume3", "./Sprite3/costumes/costume3.svg", {
        x: 23.666656494140625,
        y: 25.333328247070284
      }),
      new Costume("costume4", "./Sprite3/costumes/costume4.svg", {
        x: 23.666656494140625,
        y: -11.666671752929716
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "STOP!!!!!!!!" },
        this.whenIReceiveStop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage5
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5)
    ];

    this.vars.buildinghp2 = 10;
  }

  *whenIReceiveMessage1() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield;
    }
    this.vars.buildinghp2 = 100;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(this.toNumber(this.stage.vars.buildingMovement) * -1);
      }
      if (this.keyPressed("left arrow")) {
        this.move(this.toNumber(this.stage.vars.buildingMovement));
      }
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.goto(this.random(500, -500), this.random(-58, -127));
    while (true) {
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.visible = false;
      }
      if (!this.touching(Color.rgb(0, 0, 0))) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveMessage3() {
    while (true) {
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 1) {
          this.vars.buildinghp2 -= 10;
          yield* this.wait(1);
        }
      }
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 2) {
          this.vars.buildinghp2 -= 15;
          yield* this.wait(1);
        }
      }
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 3) {
          this.vars.buildinghp2 -= 30;
          yield* this.wait(1);
        }
      }
      yield;
    }
  }

  *whenIReceiveMessage4() {
    this.costume = "costume1";
    while (true) {
      if (this.compare(80, this.vars.buildinghp2) > 0) {
        this.costume = "costume1";
      }
      if (this.compare(60, this.vars.buildinghp2) > 0) {
        this.costume = "costume2";
      }
      if (this.compare(40, this.vars.buildinghp2) > 0) {
        this.costume = "costume3";
      }
      if (this.compare(20, this.vars.buildinghp2) > 0) {
        this.costume = "costume4";
      }
      if (this.compare(0, this.vars.buildinghp2) > 0) {
        this.costume = "costume1";
        this.goto(this.random(500, -500), this.random(106, -127));
        this.vars.buildinghp2 = 100;
      }
      yield;
    }
  }

  *whenIReceiveStop() {
    this.stage.vars.buildingMovement = 0;
    yield* this.wait(0.000001);
    this.stage.vars.buildingMovement = 3;
  }

  *whenIReceiveMessage5() {
    while (true) {
      if (this.touching(Color.rgb(156, 156, 156))) {
        this.goto(this.random(500, -500), this.random(106, -127));
      }
      yield;
    }
  }

  *startAsClone() {
    this.goto(this.random(500, -500), this.random(-58, -127));
    while (true) {
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.visible = false;
      }
      if (!this.touching(Color.rgb(0, 0, 0))) {
        this.visible = true;
      }
      yield;
    }
  }

  *startAsClone2() {
    this.costume = "costume1";
    while (true) {
      if (this.compare(80, this.vars.buildinghp2) > 0) {
        this.costume = "costume1";
      }
      if (this.compare(60, this.vars.buildinghp2) > 0) {
        this.costume = "costume2";
      }
      if (this.compare(40, this.vars.buildinghp2) > 0) {
        this.costume = "costume3";
      }
      if (this.compare(20, this.vars.buildinghp2) > 0) {
        this.costume = "costume4";
      }
      if (this.compare(0, this.vars.buildinghp2) > 0) {
        this.costume = "costume1";
        this.goto(this.random(500, -500), this.random(106, -127));
        this.vars.buildinghp2 = 100;
      }
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 1) {
          this.vars.buildinghp2 -= 10;
          yield* this.wait(1);
        }
      }
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 2) {
          this.vars.buildinghp2 -= 15;
          yield* this.wait(1);
        }
      }
      if (this.touching(this.sprites["KaijuMan"].andClones())) {
        if (this.toNumber(this.stage.vars.atk1) === 3) {
          this.vars.buildinghp2 -= 30;
          yield* this.wait(1);
        }
      }
      yield;
    }
  }

  *startAsClone4() {
    this.vars.buildinghp2 = 100;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(this.toNumber(this.stage.vars.buildingMovement) * -1);
      }
      if (this.keyPressed("left arrow")) {
        this.move(this.toNumber(this.stage.vars.buildingMovement));
      }
      yield;
    }
  }

  *startAsClone5() {
    while (true) {
      if (this.touching(Color.rgb(156, 156, 156))) {
        this.goto(this.random(500, -500), this.random(106, -127));
      }
      yield;
    }
  }
}
