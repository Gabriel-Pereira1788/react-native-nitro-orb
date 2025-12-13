import SwiftUI

extension Color {
    init?(hex: String) {
        guard let uiColor = UIColor(hex: hex) else {
            return nil
        }
        self.init(uiColor)
    }
}
