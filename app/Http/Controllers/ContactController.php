<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(){
        $contacts = Contact::all();
        return Inertia::render('Admin/Contact', ['contacts' => $contacts]);
    }


    public function store(Request $request) {
        $validateContact = $this->valdationContact($request);
        
        Contact::create($validateContact);
        return back()->with('success', 'Contact has been added');
    }

    public function update(Request $request, $id){
        $validateContact = $this->valdationContact($request);
        $updatedContact = Contact::find($id);
       
        $updatedContact->update($validateContact);
        return back()->with('success', 'Contact has been updated');
    }

    public function valdationContact ($request) {
        $rules = [
            'contact_type' => 'required'
        ];

        switch ($request->contact_type) {
            case 'Mail':
                $rules['contact'] = 'required|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
                break;
            case 'WhatsApp':
                $rules['contact'] = 'required|regex:/^(\+62|62|0)8[1-9][0-9]{6,9}$/';
                break;
            case 'Telephone':
                $rules['contact'] = 'required|regex:/^(\+62|62|0)8[1-9][0-9]{6,9}$/';
                break;
            case 'Telegram':
                $rules['contact'] = 'required|regex:/^[a-zA-Z0-9]+$/';
                break;
        }

        $errorMessage = $this->createErrorMessage($request->contact_type);
        return $request->validate($rules, $errorMessage);

    }

    public function createErrorMessage($contactType){
        $errorMessage = [
            'contact_type.required' => 'Contact type must be filled in',
            'contact.required' => 'Contact must be filled in'
        ];
        switch ($contactType) {
            case 'Mail':
                $errorMessage['contact.regex'] = 'Invalid email format';
                break;
            case 'WhatsApp':
               $errorMessage['contact.regex'] = 'Invalid phone number format';;
                break;
            case 'Telephone':
               $errorMessage['contact.regex'] = 'Invalid phone number format';;
                break;
            case 'Telegram':
                $errorMessage['contact.regex'] = 'Invalid username format';
                break;
        }

        return $errorMessage;
    }

    public function destroy($id) {
        $deletedContact = Contact::find($id);
        $deletedContact->delete();
         return back()->with('success', 'The contact has been deleted');
    }
}