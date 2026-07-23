package com.stayease.dto.response;

import com.stayease.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String token;

}