// fetchArticles.ts
import { ref, Ref, onMounted } from "vue";

interface Article {
  id: number;
  slug: string;
  title: string;
  category: {
    id: number;
    slug: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
  meta: string;
  total_view: number;
  image: string;
  created_at: string;
  updated_at: string;
}

export default function useArticle(): { articles: Ref<Article[]> } {
  const articles = ref<Article[]>([]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `http://api-staging-werkstek.spdigitalhosting.com/api/v1/top-article`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      articles.value = data.data; // Assuming 'data' field holds articles array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const setupArticle = () => {
    onMounted(fetchArticle);
    return { articles };
  };

  return setupArticle();
}
