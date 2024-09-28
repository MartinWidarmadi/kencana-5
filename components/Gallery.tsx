import Image from "next/image";
import styles from "@/styles/Gallery.module.css";

const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/301",
  "https://via.placeholder.com/302",
  "https://via.placeholder.com/303",
  "https://via.placeholder.com/304",
  "https://via.placeholder.com/305",
  "https://images.unsplash.com/photo-1719937206168-f4c829152b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1727112658582-fdb2e08878d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1727053850589-732559330974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image src={src} alt={`Image ${index + 1}`} width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
