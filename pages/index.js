import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tangent</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <p className={styles.description}>
          Upload a receipt/bank statment etc and let us extract the important
          information out for you!
        </p>

        <div className={styles.uploadArea}>
          <div className={styles.uploadBox}>
            {selectedImage == null ? (
              <p className={styles.uploadBoxText}>No image selected</p>
            ) : (
              <p className={styles.uploadBoxText}>{selectedImageName}</p>
            )}
          </div>

          <label for="inputTag" className={styles.uploadButtonLabel}>
            Upload Image
            <input
              className={styles.uploadButtonInput}
              id="inputTag"
              type="file"
              accept="image/*,.pdf"
              onChange={(event) => {
                console.log(event.target.files[0]);
                if (event.target.files[0] != undefined) {
                  setSelectedImage(event.target.files[0]);
                  setSelectedImageName(event.target.files[0].name);
                }
              }}
            />
          </label>
        </div>
        <Link href="./dashboard">
          <a>Back to Dashboard</a>
        </Link>
      </main>

      <footer className={styles.footer}>Powered by Tantrum</footer>
    </div>
  );
}
