package errlist

type Error struct {
	kind    string
	message string
}

func New(kind, message string) Error {
	return Error{
		kind:    kind,
		message: message,
	}
}

func (e Error) Kind() string {
	return e.kind
}

func (e Error) Error() string {
	return e.message
}

var (
	ErrEmailExist      = New("err-email-exist", "email is already in use")
	ErrEmailNotExist   = New("err-email-not-exist", "email is not registered")
	ErrNameExist       = New("err-name-exist", "name is already in use")
	ErrNameNotExist    = New("err-name-not-exist", "name is not registered")
	ErrGeneric         = New("err-generic", "something happened")
	ErrNotExist        = New("err-not-exist", "does not exist")
	ErrExist           = New("err-exist", "already exist")
	ErrInvalidPassword = New("err-invalid-password", "password is invalid")
	ErrJsonDecoder     = New("err-json-decoder", "malformed input")
)