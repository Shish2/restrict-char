restrictChars = (inp, chars, unrestrict) => {
  if (!unrestrict) {
    inp.onkeydown = (e) => {
      window.down = inp.value;
    };
    inp.oninput = (e) => {
      switch (e.inputType) {
        case `insertText`:
          if (!chars.includes(e.data)) {
            var t = inp.value.split(``);
            t.pop();
            inp.value = t.join(``);
          }
          break;
        case `insertFromPaste`:
          var s = inp.value;
          var s1 = s.substring(down.length);
          var s2 = s1.split(``),
            s3 = s2.length;
          for (var i = 0; i < s3; i++) {
            if (!chars.includes(s2[i])) {
              s2[i] = ``;
            }
          }
          var t = inp.value.split(``);
          for (i = 0; i < s2.length; i++) {
            if (s2[i] == ``) s2.pop();
          }

          inp.value = down.split(``).concat(s2).join(``);
      }
    };
  } else {
    inp.onkeydown = inp.oninput = null;
  }
};
