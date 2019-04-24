Phoenix.log('Hello from repo');

Key.on('f', ['alt', 'cmd'], () => {
  const focused = Window.focused();
  if (focused) {
    focused.maximize();
  }
});

Key.on('d', ['alt', 'cmd'], () => {
  const focused = Window.focused();
  if (focused) {
    Phoenix.log(focused.app().name());
    const frame = focused.screen().frame();
    const size: Rectangle = {
      x: frame.x,
      y: frame.y,
      height: 200,
      width: frame.width / 2,
    };
    Phoenix.log(JSON.stringify(frame));
    focused.setFrame(size);
  }
});

// Phoenix.log(focused.name());

// const space = Space.active();
// if (space) {
//   Phoenix.log(space.windows().map(win => win.app().name()));
// }

// const modal = Modal.build({
//   text: 'Hello',
//   duration: 3,
//   origin: frame => {
//     Phoenix.log(JSON.stringify(frame));
//     return { x: 200, y: 200 };
//   },
// });

// modal.show();

// const codeApp = App.get('Code');
// if (codeApp) {
//   const wins = codeApp.windows();
//   Phoenix.log(wins.map(w => w.screen().identifier()));
// }
