!function() {
    "use strict";
    function e(e) {
        let t = this.attributes.position;
        if (null != this.index) return;
        let o = t.count / 3, r = [], n = new THREE.Triangle(), s = new THREE.Vector3(), a = new THREE.Vector3(), i = new THREE.Vector3();
        for (let E = 0; E < o; E++) {
            s.fromBufferAttribute(t, 3 * E + 0), a.fromBufferAttribute(t, 3 * E + 1), i.fromBufferAttribute(t, 3 * E + 2), 
            n.set(s, a, i);
            let o = new THREE.Vector3();
            n.getMidpoint(o);
            let l = s.distanceTo(a), p = Math.sqrt(3) / 2 * l * e, m = o.clone().normalize().setLength(p);
            o.add(m), r.push(o.clone(), s.clone(), a.clone(), o.clone(), a.clone(), i.clone(), o.clone(), i.clone(), s.clone());
        }
        let E = new THREE.BufferGeometry().setFromPoints(r);
        return E.computeVertexNormals(), E;
    }
    function t(e, t, o) {
        let r = [];
        for (let n = 0; n < 2 * e; n++) {
            let s, a;
            r.push(0, 0, o), n % 2 == 0 ? (s = t, a = 1) : (s = 1, a = t);
            let i = n / e * Math.PI;
            r.push(Math.cos(i) * a, Math.sin(i) * a, 0), i = (n + 1) / e * Math.PI, r.push(Math.cos(i) * s, Math.sin(i) * s, 0);
        }
        return r = new Float32Array(r), (E = new THREE.BufferGeometry()).setAttribute("position", new THREE.BufferAttribute(r, 3)), 
        E.computeVertexNormals(), e % 2 == 0 ? E.rotateZ(Math.PI / e * 2 / 2 - Math.PI / 4) : E.rotateZ(-Math.PI / e / 2), 
        E;
    }
    function o() {
        n.aspect = window.innerWidth / window.innerHeight, n.updateProjectionMatrix(), a.setSize(window.innerWidth, window.innerHeight);
    }
    function r() {
        requestAnimationFrame(r), i.update(), a.render(s, n);
    }
    let n, s, a, i, E, l, p, m, u, c, h, d, f, w, R = 1, H = "", T = [], y = [], G = new THREE.Vector3(0, 0, 0);
    new THREE.Vector3(0, 0, 0);
    !function() {
        const g = document.createElement("div");
        document.body.appendChild(g), (s = new THREE.Scene()).background = 0, (a = new THREE.WebGLRenderer({
            antialias: !0
        })).setPixelRatio(window.devicePixelRatio), a.setSize(window.innerWidth, window.innerHeight), 
        a.outputEncoding = THREE.sRGBEncoding, a.shadowMap.enabled = !0, g.appendChild(a.domElement), 
        (n = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .01, 500)).position.set(0, 5, 13), 
        n.lookAt(0, 0, 0), (i = new THREE.OrbitControls(n, a.domElement)).autoRotate = !0, 
        i.autoRotateSpeed = 2, i.enableDamping = !0, i.enablePan = !1, i.minDistance = 3, 
        i.maxDistance = 30, i.minPolarAngle = 0, i.maxPolarAngle = Math.PI / 2, i.target.set(0, 0, -4.5), 
        i.coupleCenters = !0, i.update();
        const M = new THREE.AmbientLight(16777215, .5);
        s.add(M), l = new THREE.MeshNormalMaterial({
            flatShading: !0,
            side: THREE.DoubleSide
        }), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = 1.5, E = new THREE.BoxGeometry(u, u, u), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-9, 0, 0), c = .5, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 8, d = -1, f = -3), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(2)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = Math.sqrt(2), E = new THREE.BoxGeometry(u, u, u), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-9, 0, -3), c = .5, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 4, d = -1, f = 1), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(Math.sqrt(2))), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = Math.sqrt(2), E = new THREE.IcosahedronGeometry(u, 0), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-9, 0, -6), c = .5, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 4, d = -1, f = 1), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(Math.sqrt(2))), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = 1.22, E = new THREE.DodecahedronGeometry(u, 0), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-9, 0, -9), c = .5, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 4, d = -1, f = 1), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(Math.sqrt(2))), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = 1, c = -4, T = [], THREE.BufferGeometry.prototype.tripleFace = e, 
        R = 0, E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), T.push(E), l = l.clone(), 
        (m = new THREE.Mesh(E, l)).position.set(-6, 0, 0), c = .5, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), u = 1, c = -1.9, T = [], THREE.BufferGeometry.prototype.tripleFace = e, 
        R = 0, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), T.push(E), l = l.clone(), 
        (m = new THREE.Mesh(E, l)).position.set(-6, 0, -3), c = .8, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), 
        y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = 1.5, E = new THREE.BoxGeometry(u, u, u), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-6, 0, -6), c = .7, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 4, d = -1, f = 1), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = 1, T = [], E = new THREE.IcosahedronGeometry(u, 1), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), w = t(h = 4, d = -1, f = 1.5), 
        c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(-6, 0, -9), 
        c = .4, m.scale.set(c, c, c), m.name = "star", s.add(m), u = 1, T = [], E = new THREE.OctahedronGeometry(u, 1), 
        y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), w = t(h = 4, d = -1, f = 1.5), 
        c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-.5)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(-6, 0, -12), 
        c = .4, m.scale.set(c, c, c), m.name = "star", s.add(m), u = 1, R = 0, E = new THREE.IcosahedronGeometry(u, R), 
        T.push(E), l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(-12, 0, 0), m.name = "star", 
        s.add(m), u = 1, E = new THREE.DodecahedronGeometry(u, 0), (m = new THREE.Mesh(E, l)).position.set(-12, 0, -3), 
        m.name = "star", s.add(m), u = 1, E = new THREE.OctahedronGeometry(u, 0), (m = new THREE.Mesh(E, l)).position.set(-12, 0, -6), 
        m.name = "star", s.add(m), u = 1, E = new THREE.BoxGeometry(u, u, u), (m = new THREE.Mesh(E, l)).position.set(-12, 0, -9), 
        m.name = "star", s.add(m), u = 1, E = new THREE.TetrahedronGeometry(u, 0), (m = new THREE.Mesh(E, l)).position.set(-12, 0, -12), 
        m.name = "star", s.add(m), u = 1, c = -.3, T = [], THREE.BufferGeometry.prototype.tripleFace = e, 
        R = 0, E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), T.push(E), l = l.clone(), 
        (m = new THREE.Mesh(E, l)).position.set(-3, 0, 0), m.name = "star", s.add(m), R = 1, 
        E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), T.push(E), (m = new THREE.Mesh(E, l)).position.set(-3, 0, -3), 
        m.name = "star", s.add(m), R = 2, E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), 
        T.push(E), (m = new THREE.Mesh(E, l)).position.set(-3, 0, -6), m.name = "star", 
        s.add(m), E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(-3, 0, -9), 
        m.name = "star", s.add(m), u = 1, c = .5, T = [], THREE.BufferGeometry.prototype.tripleFace = e, 
        R = 0, E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), T.push(E), l = l.clone(), 
        (m = new THREE.Mesh(E, l)).position.set(0, 0, 0), m.name = "star", s.add(m), R = 1, 
        E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), T.push(E), (m = new THREE.Mesh(E, l)).position.set(0, 0, -3), 
        m.name = "star", s.add(m), R = 2, E = new THREE.IcosahedronGeometry(u, R).tripleFace(c), 
        T.push(E), (m = new THREE.Mesh(E, l)).position.set(0, 0, -6), m.name = "star", s.add(m), 
        u = 1, c = -.05, T = [], THREE.BufferGeometry.prototype.tripleFace = e, R = 0, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), 
        T.push(E), l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(3, 0, 0), m.name = "star", 
        s.add(m), R = 1, c = -.2, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), 
        T.push(E), (m = new THREE.Mesh(E, l)).position.set(3, 0, -3), m.name = "star", s.add(m), 
        R = 2, c = -.3, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), T.push(E), 
        (m = new THREE.Mesh(E, l)).position.set(3, 0, -6), m.name = "star", s.add(m), E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), 
        (m = new THREE.Mesh(E, l)).position.set(3, 0, -9), m.name = "star", s.add(m), u = 1, 
        c = .5, T = [], THREE.BufferGeometry.prototype.tripleFace = e, R = 0, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), 
        T.push(E), l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(6, 0, 0), m.name = "star", 
        s.add(m), R = 1, E = new THREE.OctahedronGeometry(u, R).tripleFace(c), T.push(E), 
        (m = new THREE.Mesh(E, l)).position.set(6, 0, -3), m.name = "star", s.add(m), R = 2, 
        E = new THREE.OctahedronGeometry(u, R).tripleFace(c), T.push(E), (m = new THREE.Mesh(E, l)).position.set(6, 0, -6), 
        m.name = "star", s.add(m), u = .5, T = [], E = new THREE.OctahedronGeometry(u, 0), 
        y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), u = 1.5, E = new THREE.BoxGeometry(u, u, u), 
        l = l.clone(), (m = new THREE.Mesh(E, l)).position.set(9, 0, 0), c = .8, m.scale.set(c, c, c), 
        m.name = "star", s.add(m), w = t(h = 4, d = .5, f = 1), c = 1, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), p = new THREE.Mesh(E, l), 
        m.add(p), u = 1, T = [], E = new THREE.IcosahedronGeometry(u, 1), y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), w = t(h = 7, d = .7, f = 1), 
        c = .7, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(9, 0, -3), 
        c = .7, m.scale.set(c, c, c), m.name = "star", s.add(m), u = 1, T = [], E = new THREE.IcosahedronGeometry(u, 1), 
        y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), h = 8, d = .5, (w = new THREE.CylinderGeometry(0, 1, 1 / d, h)).rotateX(Math.PI / 2), 
        c = .48, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(9, 0, -6), 
        c = .7, m.scale.set(c, c, c), m.name = "star", s.add(m), u = 1, T = [], E = new THREE.IcosahedronGeometry(u, 0), 
        y = [];
        for (let e = 0; e < E.attributes.position.count; e++) G.fromBufferAttribute(E.getAttribute("position"), e), 
        y.push([ G.x, G.y, G.z ]);
        y = [ ...new Set(y.map(JSON.stringify)) ].map(JSON.parse), h = 6, d = .5, (w = new THREE.CylinderGeometry(0, 1, 1 / d, h)).rotateX(Math.PI / 2), 
        c = .48, w.scale(c, c, c);
        for (let e = 0; e < y.length; e++) G.set(y[e][0], y[e][1], y[e][2]), (E = w.clone()).lookAt(G.multiplyScalar(-1)), 
        E.translate(G.x, G.y, G.z), T.push(E);
        E = THREE.BufferGeometryUtils.mergeBufferGeometries(T), (m = new THREE.Mesh(E, l)).position.set(9, 0, -9), 
        c = .7, m.scale.set(c, c, c), m.name = "star", s.add(m), H = 16777215;
        const B = new THREE.PointLight(H, 1.5, 30);
        B.castShadow = !0, B.position.y = 3, s.add(B), T = [], E = new THREE.BoxGeometry(50, 50, 50, 1, 1, 1), 
        l = new THREE.MeshPhongMaterial({
            color: 5592405,
            shininess: 10,
            specular: 1118481
        });
        let S = E.clone(), b = E.clone(), A = E.clone(), O = E.clone(), x = E.clone(), z = E.clone();
        S.translate(0, -26.3, 0), b.translate(50, 0, 0), A.translate(-50, 0, 0), O.translate(0, 0, 50), 
        x.translate(0, 0, -50), z.translate(0, 50, 0), T.push(S), T.push(b), T.push(A), 
        T.push(O), T.push(x), T.push(z), E = THREE.BufferGeometryUtils.mergeBufferGeometries(T);
        let N = new THREE.Mesh(E, l);
        N.receiveShadow = !0, N.name = "wall", s.add(N), r(), window.addEventListener("resize", o);
    }();
}();