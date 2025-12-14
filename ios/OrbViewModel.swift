import Foundation
import SwiftUI

class OrbViewModel:ObservableObject {
    @Published var config:OrbConfiguration = OrbConfiguration()
    @Published var maxSize: CGFloat = 120
    
    func setOrbConfiguration(_ config:OrbConfiguration) {
        self.config = config
    }
    
    func setSize(_ size:Double?) {
        self.maxSize = CGFloat(size ?? 120)
    }
}
