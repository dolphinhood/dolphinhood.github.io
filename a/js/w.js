//pen by Secret Sam
//http://codepen.io/anon/pen/JdZwpx

"use strict";
var onloadDo;

onloadDo = function() {
  var addPath, addPoints, animatePath, canvas, i, j, n, opacity, path, paths, ref, view;
  canvas = document.getElementById('canvas');
  paper.setup(canvas);
  view = paper.project.view;
  paths = new paper.Group;
  addPoints = function(path, quantity) {
    var i, j, ref, x, y;
    path.add(view.bounds.bottomLeft);
    for (i = j = -1, ref = quantity + 1; j <= ref; i = j += 1) {
      x = view.viewSize.width / quantity * i;
      y = view.viewSize.height / 1.618;
      path.add(new paper.Point(x, y));
    }
    return path.add(view.bounds.bottomRight);
  };
  addPath = function(quantity, color, opacity) {
    var path;
    path = new paper.Path();
    path.fillColor = color;
    path.opacity = opacity;
    addPoints(path, quantity);
    path.smooth();
    return path;
  };
  animatePath = function(path, event, index) {
    var i, j, len, ref, results, segment, sin;
    ref = path.segments;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      segment = ref[i];
      if (i > 0 && i < path.segments.length - 1) {
        sin = Math.sin(event.time * 1.8 + i - index);
        results.push(segment.point.y = sin * 45 + view.viewSize.height / 1.618 + index * 15);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  n = 2;
  opacity = 1 / (n * 1);
  for (i = j = 1, ref = n; j <= ref; i = j += 1) {
    path = addPath(8 - i, '#0000ff', i * opacity);
    path.position.y += 25 * i;
    paths.addChild(path);
  }
  view.onFrame = function(event) {
    var k, len, ref1, results;
    ref1 = paths.children;
    results = [];
    for (i = k = 0, len = ref1.length; k < len; i = ++k) {
      path = ref1[i];
      results.push(animatePath(path, event, i));
    }
    return results;
  };
  console.log('###');
  view.draw();
  return null;
};

window.onload = onloadDo;