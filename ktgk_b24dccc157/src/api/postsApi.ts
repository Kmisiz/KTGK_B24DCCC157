export interface Post {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: string;
  createdAt: string;
}

let posts: Post[] = [
  {
    id: 1,
    title: "Khám phá Đà Lạt mùa hoa anh đào",
    author: "Nguyễn Văn A",
    thumbnail: "https://i1-dulich.vnecdn.net/2021/01/06/hoangdong-Dalat-1609923467.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=S9ZVSI3CgMzLHAD6wpikDw",
    content: "Đà Lạt nổi tiếng với cảnh sắc thiên nhiên tuyệt đẹp và mùa hoa anh đào rực rỡ...",
    category: "Du lịch",
    createdAt: "22/10/2025 10:00"
  },
  {
    id: 2,
    title: "Top 10 món ăn vặt Sài Gòn không thể bỏ lỡ",
    author: "Trần Thị B",
    thumbnail: "https://static.vinwonders.com/production/an-vat-sai-gon-2.jpg",
    content: "Sài Gòn luôn sôi động với các món ăn vặt đa dạng, từ bánh tráng trộn, hủ tiếu, đến chè...",
    category: "Ẩm thực",
    createdAt: "21/10/2025 15:30"
  },
  {
    id: 3,
    title: "Học lập trình React từ con số 0",
    author: "Lê C",
    thumbnail: "https://topdev.vn/blog/wp-content/uploads/2019/09/reactjs-nhung-dieu-ban-can-phai-biet-4.png",
    content: "React là thư viện phổ biến giúp xây dựng giao diện web nhanh chóng và linh hoạt...",
    category: "Công nghệ",
    createdAt: "20/10/2025 09:45"
  },
  {
    id: 4,
    title: "5 cách đơn giản giảm stress mỗi ngày",
    author: "Phạm D",
    thumbnail: "https://massagechair.com.vn/wp-content/uploads/2023/08/giam-stress-.jpg",
    content: "Cuộc sống bận rộn dễ khiến bạn căng thẳng. Hãy thử những cách sau để giảm stress...",
    category: "Đời sống",
    createdAt: "19/10/2025 18:20"
  },
  {
    id: 5,
    title: "Những địa điểm sống ảo ở Hội An",
    author: "Ngô E",
    thumbnail: "https://statics.vinpearl.com/kien-truc-pho-co-hoi-an-2_1665128843.jpg",
    content: "Hội An là thành phố cổ với nhiều góc sống ảo đẹp mê mẩn, từ phố cổ, cầu Nhật Bản...",
    category: "Du lịch",
    createdAt: "18/10/2025 14:10"
  },
  {
    id: 6,
    title: "Cách chăm sóc thú cưng đúng chuẩn",
    author: "Vũ F",
    thumbnail: "https://file.hstatic.net/200000159621/article/unnamed__1___1__2c65ffd9d95b4599ade005ae9d4e62ae_grande.jpg",
    content: "Nuôi thú cưng không chỉ là vui, mà còn cần chăm sóc đúng cách để chúng khỏe mạnh...",
    category: "Đời sống",
    createdAt: "17/10/2025 11:00"
  }
];

// Các API "fake" để thao tác mảng posts
export async function getPosts(): Promise<Post[]> {
  return posts;
}

export async function addPost(post: Omit<Post, "id" | "createdAt">): Promise<Post> {
  const newPost: Post = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    createdAt: new Date().toLocaleString(),
    ...post
  };
  posts.push(newPost);
  return newPost;
}

export async function updatePost(id: number, data: Partial<Post>): Promise<Post | undefined> {
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  posts[index] = { ...posts[index], ...data };
  return posts[index];
}

export async function deletePost(id: number): Promise<void> {
  posts = posts.filter(p => p.id !== id);
}
