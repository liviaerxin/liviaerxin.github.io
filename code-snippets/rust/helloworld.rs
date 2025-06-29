fn add(x: i32, y: i32) -> i32 {
  x + y
}

struct Point {
  x: f64,
  y: f64,
}

impl Point {
  fn distance_from_origin(&self) -> f64 {
      (self.x.powi(2) + self.y.powi(2)).sqrt()
  }
}

fn divide(a: f64, b: f64) -> Result<f64, String> {
  if b == 0.0 {
      Err("Divide by zero".to_string())
  } else {
      Ok(a / b)
  }
}

trait Summarize {
  fn summary(&self) -> String;
}

struct News {
  title: String,
}

impl Summarize for News {
  fn summary(&self) -> String {
      format!("News: {}", self.title)
  }
}

struct Podcast {
  author: String,
}

impl Summarize for Podcast {
  fn summary(&self) -> String {
    format!("Author: {}". self.author)
  }
}


fn main() {
  let result = add(3, 5);
  println!("Sum: {}", result);

  let point = Point { x: 3.0, y: 4.0 };
  println!("Distance from origin: {}", point.distance_from_origin());

  println!("Division result: {:?}", divide(10.0, 2.0));
  println!("Division result: {:?}", divide(10.0, 0.0));

  let mut numbers = vec![1, 2, 3];
  numbers.push(4);

  for num in &numbers {
      println!("{}", num);
  }

  let squares: Vec<_> = numbers.iter().map(|x| x * x).collect();

  let news = News { title: "Rust is awesome!".to_string() };
  println!("{}", news.summary());
}