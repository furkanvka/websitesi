import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gömülü Sistemler',
    Svg: require('@site/static/img/Gömülü.svg').default,
    description: (
      <>
        Mikrodenetleyicilerle küçük makineleri büyük hayallere dönüştürmek. STM32 ve FreeRTOS ile donanımın sihrini keşfet!
      </>
    ),
  },
  {
    title: 'Yapay Zeka',
    Svg: require('@site/static/img/yapayzeka.svg').default,
    description: (
      <>
        Neural network’ler garip ama bir o kadar da büyüleyici! Görüntü işlemeyi severim, çünkü makineler görmeyi öğrendiğinde neler yapabileceği sınırsız.
      </>
    ),
  },
  {
    title: 'Yazılım Geliştirme',
    Svg: require('@site/static/img/yazilim.svg').default,
    description: (
      <>
        C++ ile imkansız buldugum problemleri çözmeyi deniyorum. başaramıyorum.
      </>
    ),
  },
];




function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
