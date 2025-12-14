import SwiftUI
import UIKit

final class SwiftUIViewWrapper: UIView {

    private let hostingController: UIHostingController<AnyView>

    init(rootView: any View) {
        self.hostingController = UIHostingController(
            rootView: AnyView(rootView)
        )
        super.init(frame: .zero)

        let hostedView = hostingController.view!
        hostedView.translatesAutoresizingMaskIntoConstraints = false
        hostedView.backgroundColor = .clear
        backgroundColor = .clear

        addSubview(hostedView)

        NSLayoutConstraint.activate([
            hostedView.topAnchor.constraint(equalTo: topAnchor),
            hostedView.leadingAnchor.constraint(equalTo: leadingAnchor),
            hostedView.trailingAnchor.constraint(equalTo: trailingAnchor),
            hostedView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
