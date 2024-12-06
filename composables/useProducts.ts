// fetchArticles.ts
import { ref, Ref, onMounted } from "vue";

interface Article {
  id: number;
  name: string;
  slug: string;
  title: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export default function useArticle(): { facilities: Ref<Article[]> } {
  const facilities = ref<Article[]>([]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `http://api-staging-werkstek.spdigitalhosting.com/api/v1/locations`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      facilities.value = data.data; // Assuming 'data' field holds articles array
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  onMounted(() => fetchArticle());

  return {
    facilities,
  };
}
