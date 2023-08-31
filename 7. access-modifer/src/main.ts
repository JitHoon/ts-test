// 접근 제어자
// public => default 어디서든 접근 가능
// protected => 클래스 내, 상속 받은 자식 클래스에서 접근 가능
// private => 클래스 내에서만 접근 가능

class PostA {
  constructor(
    public id: number,
    protected title: string,
    private name: string
  ) {
    this.id = id;
    this.title = title;
    this.name = name;
  }

  getPost() {
    return `postID: ${this.id}, postTitle: ${this.title}, postName: ${this.name}`;
  }
}

class PostB extends PostA {
  getPost() {
    // this.id, this.title 접근 가능
    // this.name 접근 불가
    return `postID: ${this.id}, postTitle: ${this.title}`;
  }
}

let post: PostA = new PostA(1, "title: 1", "Hoon");
post.id;
// post.title; // 접근 불가
// post.name; // 접근 불가
