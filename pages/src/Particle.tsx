import RenderResult from 'next/dist/server/render-result';
import styles from './particle.module.css';
import { useEffect } from 'react';
import * as THREE from 'three';
import { AmbientLight,
    DirectionalLight,
    Fog, 
    Mesh,
    MeshPhongMaterial,
    Object3D, 
    PerspectiveCamera,
    Scene,
    SphereBufferGeometry,
    WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

interface ParamsAnimate {
    object: THREE.Object3D
    composer: EffectComposer
}

const Particle: React.FC = () => {
    const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
        if(!canvas) {
            return
        }

        const width = window.innerWidth;
        const height = window.outerHeight;

        const scene = new Scene()
        const camera = new PerspectiveCamera(100, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
        camera.position.z = 240

        const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
        renderer.setClearColor('#1d1d1d')
        renderer.setSize(width, height) 

        //init object
        const object = new Object3D()
        scene.add(object);
        //fog
        scene.fog = new Fog(0xffffff, 1, 1000)
        //light
        const spotLight = new DirectionalLight(0xffffff)
        spotLight.position.set(0, 0, 0)
        scene.add(spotLight)
        const ambientLight = new AmbientLight(0x222222)
        scene.add(ambientLight)
        //object
        const geometry = new SphereBufferGeometry(2, 3, 4)
        for (let i = 0; i < 100; i ++) {
            const material = new MeshPhongMaterial({
                color: 0x000000,
                flatShading: true
            })
            const mesh = new Mesh(geometry, material)
            mesh.position.set(Math.random() -0.5, Math.random() -0.5, Math.random() -0.1).normalize()
            mesh.position.multiplyScalar(Math.random() * 400)
            mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50
            object.add(mesh)
        }
         // add postprocessing
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        const effectGlitch = new GlitchPass(64)
        // true => exstreme
        effectGlitch.goWild = false
        effectGlitch.renderToScreen = true
        composer.addPass(effectGlitch)


        window.addEventListener("resize", () => handleResize({camera, renderer}));

        animate({ object, composer })

        renderer.render(scene, camera)
        }

    const handleResize = ({ camera, renderer }: any) => {
        const width = window.innerWidth
        const height = window.innerHeight
        camera.aspect = width / width
        camera.updateProjectionMatrix()
        camera.updateProjectionMatrix()
        renderer.setSize(width, width)
    }
    useEffect(() => {
        return() => window.removeEventListener('resize', () => handleResize)
    })

    // アニメーション
    const animate = ({ object, composer }: ParamsAnimate) => {
        window.requestAnimationFrame(() => animate({ object, composer }))
        object.rotation.x += 0.01
        object.rotation.z += 0.01
        composer.render()
      }
        
    return (
            <canvas className={styles.canvas}ref={onCanvasLoaded}></canvas>
    )
}

export default Particle;
function animate(arg0: { object: THREE.Object3D<THREE.Event>; composer: EffectComposer; }) {
    throw new Error('Function not implemented.');
}

