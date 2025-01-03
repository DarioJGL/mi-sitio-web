import CardProfile from '@/ui/CardProfile/CardProfile';
import CardProfileDescription from '@/ui/CardProfileDescription/CardProfileDescription';
import styles from './SobreMi.module.css';

export default function AboutMe() {
  return (
    <main>
      <section className={styles.aboutMe}>
        <CardProfile />
        <CardProfileDescription />
      </section>
    </main>
  );
}
