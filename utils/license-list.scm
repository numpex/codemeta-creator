#!/usr/bin/env -S guix repl --
!#

;;; This module extends GNU Guix and is licensed under the same terms, those
;;; of the GNU GPL version 3 or (at your option) any later version.
;;;
;;; Copyright © 2023 Inria

(use-modules (guix licenses)
             (guix discovery)
             (json)
             (srfi srfi-1)
             (ice-9 match))

(define (all-licenses)
  (fold-module-public-variables* (lambda (module symbol variable lst)
                                   (let ((value (variable-ref variable)))
                                     (if (license? value)
                                         (alist-cons symbol value lst)
                                         lst)))
                                 '()
                                 (list (resolve-interface '(guix licenses)))))

(define (license->alist symbol license)
  `((variableName . ,(symbol->string symbol))
    (name . ,(license-name license))
    (uri . ,(license-uri license))))

(define (license-json licenses)
  (list->vector
   (map (match-lambda
          ((symbol . license)
           (license->alist symbol license)))
        licenses)))

;; Spit out license JSON.
(scm->json (license-json (all-licenses))
           (current-output-port))
