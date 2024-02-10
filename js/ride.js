const { THREE: e } = window;
function isMobile() {
    var e;
    let t = !1;
    return (
        (e = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            e
        ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
            )) &&
            (t = !0),
        t
    );
}
const IS_MOBILE_DEVICE = isMobile(),
    FLAGS = Object.freeze({ ENABLE_SHADOWS: !IS_MOBILE_DEVICE, ENABLE_BLOOM: !IS_MOBILE_DEVICE, ENABLE_NOISE: !IS_MOBILE_DEVICE }),
    COLOR_PALETTE = Object.freeze({
        black: 65793,
        white: 15658734,
        color1: 16196997,
        color2: 11868062,
        color3: 7473591,
        color4: 5639085,
        color5: 4721832,
        color6: 3804323,
        color7: 4143049,
        color8: 4415982,
        color9: 4756975,
        color10: 5032432,
    }),
    COLOR_PALETTE_GLSL = Object.freeze({
        black: "vec4(0.04, 0.04, 0.04, 1.0)",
        white: "vec4(0.933, 0.933, 0.933, 1.0)",
        color1: "vec4(0.969, 0.145, 0.522, 1.0)",
        color2: "vec4(0.71, 0.09, 0.62, 1.0)",
        color3: "vec4(0.447, 0.035, 0.718, 1.0)",
        color4: "vec4(0.337, 0.043, 0.678, 1.0)",
        color5: "vec4(0.282, 0.047, 0.659, 1.0)",
        color6: "vec4(0.227, 0.047, 0.639, 1.0)",
        color7: "vec4(0.247, 0.216, 0.788, 1.0)",
        color8: "vec4(0.263, 0.38, 0.933, 1.0)",
        color9: "vec4(0.282, 0.584, 0.937, 1.0)",
        color10: "vec4(0.298, 0.788, 0.941, 1.0)",
    });
class DefaultMaterial extends e.MeshStandardMaterial {
    constructor() {
        super({ color: COLOR_PALETTE.white });
    }
}
class CarMaterial extends e.MeshStandardMaterial {
    constructor() {
        super({ color: COLOR_PALETTE.black });
    }
}
class LightMaterial extends e.MeshStandardMaterial {
    constructor() {
        super({ color: COLOR_PALETTE.color1 });
    }
}
class WheelMaterial extends e.MeshStandardMaterial {
    constructor() {
        super({ color: COLOR_PALETTE.black });
    }
}
class MountainMaterial extends e.MeshBasicMaterial {
    constructor() {
        super({ color: COLOR_PALETTE.black });
    }
}
class CustomMaterial extends e.MeshStandardMaterial {
    onBeforeCompile(e) {
        (e.uniforms.uTime = { value: 0 }),
            (e.vertexShader = e.vertexShader.replace(
                "#include <uv_pars_vertex>",
                `varying vec2 vUv;
            uniform float uTime;`
            )),
            (e.vertexShader = e.vertexShader.replace("#include <uv_vertex>", "vUv = uv;")),
            (e.fragmentShader = e.fragmentShader.replace(
                "varying vec3 vViewPosition;",
                `varying vec3 vViewPosition;
            varying vec2 vUv;
            uniform float uTime;`
            )),
            (this.userData.shader = e);
    }
}
class CustomTransparentMaterial extends CustomMaterial {
    constructor() {
        super({ transparent: !0 });
    }
}
class RoadMaterial extends CustomTransparentMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            float width = 0.06;

            bool isInCenter = abs(0.5 - vUv.x) < (0.01 + width / 2.0);
            bool isInRoad = abs(0.5 - vUv.x) < (width / 2.0);

            if (isInCenter) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color9};
            }

            if (isInRoad) {
                diffuseColor = ${COLOR_PALETTE_GLSL.black};

                diffuseColor.a = 0.8;

                bool isInLine = (abs(0.5 - vUv.x + width / 6.0) < 0.0003);
                bool isInDashedLine = (abs(0.5 - vUv.x - width / 6.0) < 0.0003)
                    && (sin(100.0 * vUv.y - 10.0 * uTime) > 0.3);

                if (isInLine || isInDashedLine) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color10};
                }
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class SunMaterial extends CustomTransparentMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = vec4(0.0);

            bool isInSun = distance(vUv.xy, vec2(0.5, 0.5)) < 0.5;

            if (isInSun) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color1};

                float delta = 0.2 * (1.0 - vUv.y);

                diffuseColor += vec4(delta, delta, 0.0, 0.0);

                bool isInLine = sin(100.0 * vUv.y) * vUv.y > 0.3;

                if (isInLine) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color3};
                }
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class BuildingMaterialA extends CustomMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.09
                && (sin(31.415 * (vUv.x - 0.05)) > 0.5)
                && (sin(100.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color7};

                if (vUv.x > 0.4 && vUv.x < 0.6) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color10};
                }
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class BuildingMaterialB extends CustomMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.1
                && vUv.y < 0.5
                && (sin(50.0 * 3.1415 * (vUv.x - 0.05)) > -0.8)
                && (sin(50.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color1};

                if (vUv.y < 0.3) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color4};
                }
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class BuildingMaterialC extends CustomMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.5
                && vUv.y < 0.8
                && (sin(5.0 * 3.1415 * (vUv.x - 0.05)) > -0.8)
                && (sin(50.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color9};
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class BuildingMaterialD extends CustomMaterial {
    onBeforeCompile(e) {
        super.onBeforeCompile(e),
            (e.fragmentShader = e.fragmentShader.replace(
                "#include <map_fragment>",
                `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.1
                && (sin(50.0 * vUv.y) > -0.8);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color5};
            }
            `
            )),
            (this.userData.shader = e);
    }
}
class MaterialsLibrary {
    static default = new DefaultMaterial();
    static road = new RoadMaterial();
    static sun = new SunMaterial();
    static mountain = new MountainMaterial();
    static car = new CarMaterial();
    static wheel = new WheelMaterial();
    static light = new LightMaterial();
    static buildingA = new BuildingMaterialA();
    static buildingB = new BuildingMaterialB();
    static buildingC = new BuildingMaterialC();
    static buildingD = new BuildingMaterialD();
}
class Road extends e.Group {
    constructor() {
        super();
        let t = new e.PlaneGeometry(),
            i = MaterialsLibrary.road,
            o = new e.Mesh(t, i);
        o.scale.set(200, 200, 1), o.rotation.set(-Math.PI / 2, 0, 0), FLAGS.ENABLE_SHADOWS && (o.receiveShadow = !0), this.add(o);
        let s = new e.Reflector(new e.PlaneGeometry(10, 10), { color: new e.Color(8355711), textureWidth: window.innerWidth * window.devicePixelRatio, textureHeight: window.innerHeight * window.devicePixelRatio });
        s.position.set(0, -0.1, 0), s.scale.set(200, 200, 1), s.rotation.set(-Math.PI / 2, 0, 0), this.add(s);
    }
}
class Sun extends e.Group {
    constructor() {
        super();
        let t = new e.PlaneGeometry(),
            i = MaterialsLibrary.sun,
            o = new e.Mesh(t, i);
        o.scale.set(50, 50, 1), this.add(o);
    }
}
class Mountain extends e.Group {
    constructor() {
        super();
        let t = MaterialsLibrary.mountain,
            i = new e.Shape();
        i.moveTo(0, 0),
            i.lineTo(100, 0),
            i.lineTo(100, 50),
            i.lineTo(50, 10),
            i.lineTo(20, 15),
            i.lineTo(15, 5),
            i.lineTo(10, 10),
            i.lineTo(0, 0),
            i.lineTo(-5, 3),
            i.lineTo(-10, 10),
            i.lineTo(-12, 8),
            i.lineTo(-100, 50),
            i.lineTo(-100, 0),
            i.lineTo(0, 0);
        let o = new e.ExtrudeGeometry(i),
            s = new e.Mesh(o, t);
        this.add(s);
    }
}
class Car extends e.Group {
    constructor() {
        super();
        {
            let t = MaterialsLibrary.car,
                i = new e.Shape();
            i.moveTo(0, 0), i.lineTo(4, 0), i.lineTo(3.8, 0.3), i.lineTo(-0.1, 0.7), i.lineTo(0, 0);
            let o = new e.ExtrudeGeometry(i, { depth: 1.5, bevelThickness: 0.2 }),
                s = new e.Mesh(o, t);
            s.position.set(0, 0.3, 0), this.add(s);
        }
        {
            let a = MaterialsLibrary.car,
                r = new e.CylinderGeometry(0.6, 1.2, 0.5, 4),
                n = new e.Mesh(r, a);
            n.position.set(1.5, 1, 0.8), n.rotation.set(0, Math.PI / 4, 0), this.add(n);
        }
        {
            let $ = MaterialsLibrary.light,
                l = new e.CylinderGeometry(0.1, 0.1, 0.1, 12),
                d = new e.Mesh(l, $);
            d.position.set(-0.2, 0.9, 0), d.rotation.set(0, 0, Math.PI / 2), this.add(d);
            let c = new e.Mesh(l, $);
            c.position.set(-0.2, 0.9, 0.3), c.rotation.set(0, 0, Math.PI / 2), this.add(c);
            let h = new e.Mesh(l, $);
            h.position.set(-0.2, 0.9, 1.2), h.rotation.set(0, 0, Math.PI / 2), this.add(h);
            let u = new e.Mesh(l, $);
            u.position.set(-0.2, 0.9, 1.5), u.rotation.set(0, 0, Math.PI / 2), this.add(u);
        }
        {
            let m = MaterialsLibrary.wheel,
                p = new e.CylinderGeometry(1, 1, 1, 12),
                v = new e.Mesh(p, m);
            v.scale.set(0.33, 2, 0.33), v.position.set(3, 0.33, 0.75), v.rotation.set(Math.PI / 2, 0, 0), this.add(v);
            let f = new e.Mesh(p, m);
            f.scale.set(0.33, 2, 0.33), f.position.set(0.7, 0.33, 0.75), f.rotation.set(Math.PI / 2, 0, 0), this.add(f);
        }
    }
}
class BuildingA extends e.Group {
    constructor() {
        super();
        let t = MaterialsLibrary.buildingA,
            i = new e.BoxGeometry(),
            o = new e.Mesh(i, t);
        o.scale.set(10, 15, 10), o.position.set(0, -3, 0), FLAGS.ENABLE_SHADOWS && (o.castShadow = !0), this.add(o);
        let s = new e.ConeGeometry(5, 15, 7),
            a = new e.Mesh(s, t);
        a.position.set(0, 5, 0), this.add(a);
    }
}
class BuildingB extends e.Group {
    constructor() {
        super();
        let t = MaterialsLibrary.buildingB,
            i = new e.CylinderGeometry(),
            o = new e.Mesh(i, t);
        o.scale.set(5, 15, 5), o.position.set(0, -3, 0), FLAGS.ENABLE_SHADOWS && (o.castShadow = !0), this.add(o);
        let s = new e.SphereGeometry(7),
            a = new e.Mesh(s, t);
        a.position.set(0, 2, 0), a.rotation.set(0, 0.3, 0), this.add(a);
    }
}
class BuildingC extends e.Group {
    constructor() {
        super();
        let t = MaterialsLibrary.buildingC,
            i = new e.BoxGeometry(),
            o = new e.Mesh(i, t);
        o.scale.set(5, 5, 5), o.position.set(0, -8, 0), FLAGS.ENABLE_SHADOWS && (o.castShadow = !0), this.add(o);
    }
}
class BuildingD extends e.Group {
    constructor() {
        super();
        let t = MaterialsLibrary.buildingD,
            i = new e.ConeGeometry(1, 1, 3),
            o = new e.Mesh(i, t);
        o.scale.set(5, 20, 5), o.rotation.set(0, 1, 0), FLAGS.ENABLE_SHADOWS && (o.castShadow = !0), this.add(o);
    }
}
class City extends e.Group {
    static #a() {
        let t = Math.random();
        return t < 0.2 ? new BuildingA() : t < 0.3 ? new BuildingB() : t < 0.9 ? new BuildingC() : new BuildingD();
    }
    constructor() {
        super();
        for (let e = 0; e < 200; e += 20) {
            for (let t = 70; t >= 10; t -= 20) this.#b(t, e);
            for (let i = 120; i <= 180; i += 20) this.#b(i, e);
        }
    }
    #b(i, o) {
        let s = City.#a();
        s.position.set(i, 10, o), this.add(s);
    }
    update() {
        this.children.forEach((e) => {
            let { x: t, z: i } = e.position,
                o = i - 0.5;
            o < 0 && (o = 200);
            let s = o <= 150 ? 10 : 10 + 20 * ((150 - o) / 50);
            e.position.set(t, s, o);
        });
    }
}
class Stars extends e.Group {
    constructor() {
        super();
        let t = new e.SphereGeometry(),
            i = MaterialsLibrary.light;
        for (let o = -300; o < 300; o += 30)
            for (let s = 0; s < 300; s += 30) {
                let a = new e.Mesh(t, i),
                    r = 25 * Math.random(),
                    n = 25 * Math.random(),
                    $ = Math.random();
                a.scale.set($, $, $), a.position.set(o + r, s + n, 0), this.add(a);
            }
    }
}
class ObjectsLibrary {
    static road = new Road();
    static sun = new Sun();
    static mountain = new Mountain();
    static car = new Car();
    static city = new City();
    static stars = new Stars();
}
class SandboxWorld extends e.Group {
    #c;
    constructor() {
        super(), this.#d(), this.#e();
    }
    #d() {
        let { road: a, car: r, sun: n, city: $, mountain: l, stars: d } = ObjectsLibrary;
        a.position.set(0, 0, 100),
            n.position.set(0, 10, 200),
            n.rotation.set(-Math.PI, 0, 0),
            $.position.set(-100, 0, 0),
            l.position.set(0, 0, 200),
            r.position.set(0.7, 0, 10),
            r.rotation.set(0, -Math.PI / 2, 0),
            d.position.set(0, 0, 250),
            this.add(a),
            this.add(n),
            this.add(r),
            this.add($),
            this.add(l),
            this.add(d),
            (this.#c = { car: r, city: $ });
    }
    #e() {
        let c = new e.AmbientLight({ color: COLOR_PALETTE.color3, intensity: 0.1 });
        this.add(c);
        let h = new e.PointLight({ color: COLOR_PALETTE.color1, intensity: 5, decay: 0.5, distance: 300 });
        h.position.set(0, 30, 180), FLAGS.ENABLE_SHADOWS && (h.castShadow = !0), this.add(h);
    }
    update() {
        let e = performance.now() / 1e3;
        this.#c.car.position.set(0.7 + 0.2 * Math.sin(e), 0, 10), this.#c.city.update();
    }
}
class FullScreen3DExample {
    static CSS_ROOT = "full-screen-3d-example";
    static CSS_ROOT_LOADED_VARIANT = "-loaded";
    #f;
    #g;
    #h;
    #i;
    #j;
    #k;
    #l;
    #m;
    constructor(e) {
        (this.#f = e), this.#f.classList.add(FullScreen3DExample.CSS_ROOT), this.#n(), this.#d(), this.#o(), this.#p(), this.#q(), this.#r(), this.#s(), this.#f.classList.add(FullScreen3DExample.CSS_ROOT_LOADED_VARIANT), this.#t();
    }
    #n() {
        this.#h = new e.Scene();
    }
    #d() {
        (this.#i = new SandboxWorld()), this.#h.add(this.#i);
    }
    #o() {
        let u = window.innerWidth / window.innerHeight;
        (this.#j = new e.PerspectiveCamera(45, u, 1, 1e3)), this.#j.position.set(0, 2, 1), this.#j.lookAt(0, 0, 200), this.#j.updateProjectionMatrix(), (this.#k = { positionX: 0, positionY: 2 });
    }
    #p() {
        let m = COLOR_PALETTE.black;
        (this.#l = new e.WebGLRenderer({ alpha: !0, logarithmicDepthBuffer: !0 })),
            this.#l.setClearColor(m, 1),
            this.#l.setPixelRatio(window.devicePixelRatio),
            FLAGS.ENABLE_SHADOWS && ((this.#l.shadowMap.enabled = !0), (this.#l.shadowMap.type = e.PCFSoftShadowMap)),
            this.#f.appendChild(this.#l.domElement);
    }
    #q() {
        let p = window.innerWidth,
            v = window.innerHeight;
        (this.#m = new e.EffectComposer(this.#l)), this.#m.setSize(p, v), this.#u(), FLAGS.ENABLE_BLOOM && this.#v(), FLAGS.ENABLE_NOISE && this.#w();
    }
    #u() {
        let f = new e.RenderPass(this.#h, this.#j);
        this.#m.addPass(f);
    }
    #v() {
        let L = window.innerWidth,
            _ = window.innerHeight,
            w = new e.Vector2(L, _),
            E = new e.UnrealBloomPass(w, 0.8, 0.5, 0.1);
        this.#m.addPass(E);
    }
    #w() {
        let g = new e.ShaderPass({
            uniforms: { tDiffuse: { type: "t", value: null }, uTime: { value: 1 } },
            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
            fragmentShader: `
                uniform float uTime;
                uniform sampler2D tDiffuse;

                varying vec2 vUv;

                float rand(vec2 seed);
                float noise(vec2 position);

                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);

                    float d = 0.05 * noise(50.0 * (100.0 * uTime + vec2(vUv.x, 20.0 * vUv.y)));

                    color = vec4(color.r - d, color.g - d, color.b - d, 1.0);

                    gl_FragColor = color;
                }

                float rand(vec2 seed) {
                    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453123);
                }

                float noise(vec2 position) {
                    vec2 blockPosition = floor(position);

                    float topLeftValue     = rand(blockPosition);
                    float topRightValue    = rand(blockPosition + vec2(1.0, 0.0));
                    float bottomLeftValue  = rand(blockPosition + vec2(0.0, 1.0));
                    float bottomRightValue = rand(blockPosition + vec2(1.0, 1.0));

                    vec2 computedValue = smoothstep(0.0, 1.0, fract(position));

                    return mix(topLeftValue, topRightValue, computedValue.x)
                        + (bottomLeftValue  - topLeftValue)  * computedValue.y * (1.0 - computedValue.x)
                        + (bottomRightValue - topRightValue) * computedValue.x * computedValue.y;
                }
            `,
        });
        (g.renderToScreen = !0), this.#m.addPass(g);
    }
    #r() {
        window.addEventListener("resize", this.#s.bind(this)), document.addEventListener("mousemove", this.#x.bind(this));
    }
    #s() {
        let S = window.innerWidth,
            C = window.innerHeight;
        (this.#j.aspect = S / C), this.#j.updateProjectionMatrix(), this.#l.setSize(S, C), this.#m.setSize(S, C);
    }
    #x(b) {
        (this.#k.positionX = (5 * (window.innerWidth / 2 - b.clientX)) / window.innerWidth), (this.#k.positionY = 2 + (0.5 * (window.innerHeight / 2 - b.clientY)) / window.innerHeight);
    }
    #y() {
        let M = performance.now() / 1e3;
        this.#i.update(),
            this.#h.traverse((e) => {
                if (e.isMesh) {
                    let { shader: t } = e.material.userData;
                    t && (t.uniforms.uTime.value = M);
                }
            }),
            this.#m.passes.forEach((t) => {
                t instanceof e.ShaderPass && (t.uniforms.uTime.value = M % 10);
            });
        {
            let x = this.#k.positionX + 0.3 * (Math.sin(0.1 * M) + Math.sin(0.05 * M)),
                T = this.#k.positionY + 0.3 * Math.cos(0.3 * M);
            this.#j.position.set(x, T, 1), this.#j.updateProjectionMatrix();
        }
    }
    #t() {
        this.#y(), this.#m.render(this.#h, this.#j);
    }
    start() {
        this.#t(), (this.#g = requestAnimationFrame(this.start.bind(this)));
    }
    stop() {
        cancelAnimationFrame(this.#g);
    }
}
function main() {
    let e = document.getElementById("root"),
        t = new FullScreen3DExample(e);
    t.start();
}
document.addEventListener("DOMContentLoaded", main);
