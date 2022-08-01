import CursorManager from './CursorManager';
import CustomCursor from './CustomCursor';

export default function Layout( { children } ) {
    return (
        <CursorManager>
            <>
                <CustomCursor />
                {children}
            </>
        </CursorManager>
    );
}