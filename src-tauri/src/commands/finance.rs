#[tauri::command]
pub fn greet3(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
